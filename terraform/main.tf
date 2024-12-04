resource "azurerm_resoure_group" "rg" {
  name     = "qr-code-generator-rg"
  location = "central us"
}

resource "azurerm_storage_account" "sa" {
  name                     = "qrcodegenerator76"
  resource_group_name      = azurerm_resoure_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

}

resource "azurerm_storage_container" "cont1" {
  name                  = "azure-webjobs-hosts"
  storage_account_id    = azurerm_storage_account.sa.id
  container_access_type = "private"
}

resource "azurerm_storage_container" "cont2" {
  name                  = "qr-codes"
  storage_account_id    = azurerm_storage_account.sa.id
  container_access_type = "blob"
}

