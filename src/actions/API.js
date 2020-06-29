const host = "http://localhost:8081";
export const APIs = {
    REGISTER_LINK: `${host}/authenticate/createUser`,
    SIGNIN_LINK: `${host}/authenticate`,
    REGISTER_ACCOUNT_HOLDER: `${host}/Me/AccountHolder`,
    WITHDRAW: `${host}/Me/BankAccount/withdraw/{id}`,
    DEPOSIT: `${host}/BankAccount/deposit/{id}`
}
