import os
import time
from selenium.webdriver import Chrome

FULL_NAME = 'Aleksey'
EMAIL = 'reg@mail.ru'
PHONE = '8-800-555-35-35'
PASSWORD = '1'


webdriver_path = os.path.join(os.getcwd(), 'chromedriver')
print(webdriver_path)

driver = Chrome(executable_path=webdriver_path)

driver.get('http://localhost:3000/auth')
reg_button = driver.find_element_by_id('reg-title')
reg_button.click()

full_name = driver.find_element_by_name('full_name')
full_name.send_keys(FULL_NAME)

email = driver.find_element_by_name('email')
email.send_keys(EMAIL)

phone = driver.find_element_by_name('phone')
phone.send_keys(PHONE)

password = driver.find_element_by_name('password')
password.send_keys(PASSWORD)


retry_password = driver.find_element_by_name('retry-password')
retry_password.send_keys(PASSWORD)

submit_btn = driver.find_element_by_class_name('auth__submit')
submit_btn.click()


n = input()
if not n:
    driver.quit()


