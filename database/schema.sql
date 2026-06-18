CREATE TABLE transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  invoice_number TEXT UNIQUE NOT NULL,

  service_name TEXT NOT NULL,

  target TEXT NOT NULL,

  server_id TEXT,

  product_name TEXT NOT NULL,

  price INTEGER NOT NULL,

  payment_method TEXT NOT NULL,

  email TEXT NOT NULL,

  whatsapp TEXT NOT NULL,

  status TEXT NOT NULL DEFAULT 'PENDING',

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);