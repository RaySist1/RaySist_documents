fx_version "cerulean"

description "Documents script"
author "RaySist-documents"
version '1.0.0'
update "Hello"
repository 'https://github.com/RaySist1/RaySist_documents'

lua54 'yes'

games {
  "gta5",
}

ui_page 'web/build/index.html'

client_scripts {
  "config.lua",
  "client/**/*"
}
server_scripts {
  "@mysql-async/lib/MySQL.lua",
  "config.lua",
  "server/**/*"
}

files {
  'web/build/index.html',
  'web/build/**/*'
}
