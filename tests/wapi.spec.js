const{test,expect,request}=require('@playwright/test');
const loginpayload={userEmail: "neelamdabas0024@gmail.com", userPassword: "Welcome@12345"};

test('veryfy the url is open or not',async()=>
    {

const apicontext=await request.newContext();

const loginResponse=await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",

{
    data:loginpayload
})
expect(loginResponse.ok()).toBeTruthy();
 const loginResponsejson=await loginResponse.json();
const token=loginResponsejson.token;
console.log(token);
    

});
