export class LoginPage
{
constructor(page)
{
this.page=page;
this.username=page.locator('#user-name');
this.password=page.locator('#password');
this.loginbutton=page.locator('#login-button');


}

async login(username,pass)
{
    await this.username.fill(username);
    await this.password.fill(pass);
    await this.loginbutton.click();
}



}
