# basic-preference-centre

* Author: Adrian Gravamen
* Department: Managed Services
* Change Version: 1 
* Date: 07-02-2024 MM-DD-YYYY 

1. Update index.html line 30 SET @decrypted = DecryptSymmetric(Base64Decode(@encrypted)," AES",@password, @null, @salt, @null, @initVector) to SET @decrypted = DecryptSymmetric(Base64Decode(@encrypted),"AES",@password, @null, @salt, @null, @initVector). These fixes random string generated when running the index.html via SFMC Cloudpage. 
2. Update style.css to remove spaces between each class
3. Remove PreferredName, HomePhone, WorkPhone, DOB, Post and SubUrb on index.html Personal Details class
4. Update preference_processing.amp to include All Subscriber status update when ContactEmail is true (Active) or false (Unsubscribed) and update of Master_DE
5. Added ampscript code to update salesforce contact object HasOptedOutofEmail (True/False) and NoSMS in Account


