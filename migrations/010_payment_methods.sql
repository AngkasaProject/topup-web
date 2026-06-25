CREATE TABLE payment_methods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    gateway TEXT NOT NULL,
    gateway_code TEXT NOT NULL,
    group_name TEXT NOT NULL,
    logo TEXT,
    fee INTEGER NOT NULL DEFAULT 0,
    status INTEGER NOT NULL DEFAULT 1,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO payment_methods
(code,name,gateway,gateway_code,group_name,sort_order)
VALUES
('qris','QRIS','manual','qris','QRIS',1),

('dana','DANA','manual','dana','E-Wallet',1),
('ovo','OVO','manual','ovo','E-Wallet',2),
('gopay','GoPay','manual','gopay','E-Wallet',3),

('bca_va','BCA Virtual Account','manual','bca_va','Virtual Account',1),
('bni_va','BNI Virtual Account','manual','bni_va','Virtual Account',2),
('bri_va','BRI Virtual Account','manual','bri_va','Virtual Account',3),
('mandiri_va','Mandiri Virtual Account','manual','mandiri_va','Virtual Account',4);