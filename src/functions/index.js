const { app } = require('@azure/functions');
const QRCode = require('qrcode');
const { BlobServiceClient } = require('@azure/storage-blob');
const connectionString = process.env.STORAGE_CONNECTION_STRING;

app.http('generateQRCode', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // Get the URL from query or request body
        const url = request.query.get('url') || await request.text();
        if (!url) {
            return {
                status: 400,
                body: "Please pass a URL on the query string or in the request body"
            };
        }

        try {
            // Generate QR Code
            const qrCodeData = await QRCode.toDataURL(url);

            // Upload QR Code to Azure Blob Storage
            const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
            const containerName = 'qr-codes';
            const containerClient = blobServiceClient.getContainerClient(containerName);
            await containerClient.createIfNotExists({ access: 'blob' });

            // Remove 'https://' from the URL for the blob name
            const modifiedUrl = url.replace(/^https?:\/\//, '');
            const blobName = modifiedUrl + '.png';
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);

            // Convert the base64 QR code data to a buffer
            const matches = qrCodeData.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            const buffer = Buffer.from(matches[2], 'base64');

            // Upload the buffer to Blob Storage
            await blockBlobClient.upload(buffer, buffer.length);

            // Return the public blob URL in the response (make sure the blob is publicly accessible)
            const blobUrl = blockBlobClient.url;
            return {
                status: 200,
                body: JSON.stringify({ qr_code_url: blobUrl }),
                headers: { 'Content-Type': 'application/json' }
            };
        } catch (error) {
            return {
                status: 500,
                body: `Error: ${error.message}`
            };
        }
    }
});
