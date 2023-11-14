using OpenQA.Selenium;
using TwoCaptcha.Captcha;
using System.Linq;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using System.Xml.Linq;

namespace laba_09_Testing_Funpay_Selenium
{
    public class Tests
    {
        private IWebDriver driver;
        private readonly By _signInbutton = By.CssSelector("button[type='submit'].btn.btn-primary.btn-block");
        private readonly By _loginInputPlace = By.XPath("//input[@name='login']");
        private readonly By _passInputPlace = By.XPath("//input[@name='password']");
        
        
       
        [SetUp]
        public void Setup()
        {
            driver = new OpenQA.Selenium.Chrome.ChromeDriver();
            driver.Navigate().GoToUrl("https://funpay.com/account/settings");
            driver.Manage().Window.Maximize();

                
            //Логин KOS4EJ пароль : Qwerty12345

            //поле логина //*[@id="content"]/div/div/div/form/div[2]/input[1]
            //поле пароля //*[@id="content"]/div/div/div/form/div[2]/input[2]
            //капча //*[@id="recaptcha-anchor"]/div[1]
            // войти /html/body/div[1]/div[1]/section/div[2]/div/div/div/form/button
            //войти //*[@id="content"]/div/div/div/form/button
        }


        [Test]
        public void Test1()
        {

            var loginPlace = driver.FindElement(_loginInputPlace);
            loginPlace.SendKeys("KOS4EJJ");

            var passPlace = driver.FindElement(_passInputPlace);
            passPlace.SendKeys("Qwerty12345Qwerty12345");

            TwoCaptcha.TwoCaptcha solver = new TwoCaptcha.TwoCaptcha("09a9b050e0e7425a4c5c0af6c4983210");
            ReCaptcha captcha = new ReCaptcha();
            captcha.SetUrl("https://funpay.com/account/login");
            Thread.Sleep(60000);
            // Откройте консоль разработчика в браузере и найдите элемент с атрибутом data-sitekey
            captcha.SetSiteKey("6LdTYk0UAAAAAGgiIwCu8pB3LveQ1TcLUPXBpjDh");
            IJavaScriptExecutor js = driver as IJavaScriptExecutor;

            try
            {
                solver.Solve(captcha).Wait();
                Console.WriteLine("Captcha solved: " + captcha.Code);


                // Замените "your-recaptcha-code" на ваш код reCAPTCHA
                js.ExecuteScript($"document.getElementById('g-recaptcha-response').innerHTML = '{captcha.Code}';");

            }
            catch (AggregateException e)
            {
                Console.WriteLine("Error occurred: " + e.InnerExceptions.First().Message);
            }

            
            var signIn = driver.FindElement(_signInbutton);
            signIn.Click();
            
            Thread.Sleep(5000);
            //переход в настройки
            driver.Navigate().GoToUrl("https://funpay.com/account/wallets");

            //Добавление карты
            var selectElement = new SelectElement(driver.FindElement(By.Name("details[0][type_id]")));
            selectElement.SelectByText("Банковская карта");

            var set_card_num = driver.FindElement(By.Name("details[0][data]"));
            set_card_num.SendKeys("0000000");

            var save_card = driver.FindElement(By.CssSelector("button[type='submit'].btn.btn-primary"));
            save_card.Click();

            var element = driver.FindElement(By.CssSelector("p.help-block"));
            //Assert.Pass();
        }

        [TearDown]
        public void TearDown()
        {


        }
    }
}