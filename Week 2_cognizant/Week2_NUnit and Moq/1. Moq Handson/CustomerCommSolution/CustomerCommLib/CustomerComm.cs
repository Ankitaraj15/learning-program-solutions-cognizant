namespace CustomerCommLib
{
    public class CustomerComm
    {
        private readonly IMailSender _mailSender;

        public CustomerComm(IMailSender mailSender)
        {
            _mailSender = mailSender;
        }

        public bool SendMailToCustomer()
        {
            const string email   = "cust123@abc.com";
            const string message = "Some Message";

            return _mailSender.SendMail(email, message);
        }
    }
}
