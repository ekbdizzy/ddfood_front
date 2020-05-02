import os
import time
from selenium.webdriver import Chrome

EMAIL = 'admin@admin.ru'
PHONE = '8-800-555-35-35'
PASSWORD = '1'


webdriver_path = os.path.join(os.getcwd(), 'chromedriver')
print(webdriver_path)

driver = Chrome(executable_path=webdriver_path)

driver.get('http://localhost:3000/auth')

email = driver.find_element_by_name('email')
email.send_keys(EMAIL)

password = driver.find_element_by_name('password')
password.send_keys(PASSWORD)

submit_btn = driver.find_element_by_class_name('auth__submit')
submit_btn.click()


n = input()
if not n:
    driver.quit()


