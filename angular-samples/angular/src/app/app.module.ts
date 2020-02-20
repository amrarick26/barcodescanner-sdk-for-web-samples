// tslint:disable:missing-jsdoc

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ScanditSdkModule } from "scandit-sdk-angular";
import { AppComponent } from "./app.component";

// tslint:disable-next-line:max-line-length
const licenseKey_mobile: string = "AR7ObxWsC95ZEslnBTT41oEcEW1AKpDlpESyUn4MeBEDXQcUMH7klNVPEbvFV6GEImF3jeswYSQFdI2gaHd/5i8NuHpiUWWr9A+7owVYgE2HaB06CHZBL+1rSN6QSIoJK1ncPIho+QrBRWzlzHM1c2ph/rjmZCMRwlP60bJh4arqcvlU6FcLXZ1mD/iSfVCrXU56wLtbxA2iULMy0nHeealVFNHgRPR5+1tM9H1gzyGwQkzhg3gnz+5/TjCLX85Q23ZlvCVioMIAV8wsV1VlnQB7FwcYLNdK+FI3+nxoa0fESX6c7WdgTv8gYZoqbno0Jy1Fd99EfZR7Yyfq+CZ1Fyx1ClvzcQhkQn16h01W6h/uWH6OhXCbk+EoMBBkaS/5WV4zV8xIwAbkQ7mp2V7dH4JZxYxkex1DWSFv2f1Znjl0XtEHFnbsno9EO3BzJ76rqVd/fXpXsdvkKZ1pwFJm84JpHoCGZvsC5AxAb6B0Ws0QZn39D0Y7sVVn9ZjYWY1Cc0Pza6Mdk0umHZft+Y0JGoSBYS0suFecXXfb+rFYlxryGyjPGveGZNXu8LpUWIqqz7bbWihxC/3Hw0tvMLyXzKgS/lPk61A6tzPdJfmY7JpG1Q0O3sM6i1R0wBLAxIGWZhcGYkfjZSIi9g4pRq+S38wTqV4u4pPOCf7f6lqIqlGCCKs0N4RFINBnRxQZIFaN8KxVxzUxk4mcV6KyKkza0PEjE5wxuiUGSePt/j5QRXCwm00UwqS5LISU1bgtfUlZXv+8XMtcCrzoYCLP5Pm2IapnU324K7/7aEY/vedbHzrTnC0VsnerhW3ZToMFxczyDXXmiY5Joee/1MhCpbEimq4tT7XFC4VLJPTMVZjjxF6/DTSKeY4sdEgNH6NJSGAh6JELTsMy+5sFqGW7mPgx25BvGl7wqJ5fJP00FUsZP4DHvJMbZ5EkKIvYoJKP13OMqspqmr8vtoVjw5B+CKOvSIPr/dUSgjNkTJFE1hm99m82ArANhydd1DM315pwAFj3vI82dDwzMQLzyaG5KLVB9UeTDx+okidEgW4IGsOiMEzO0iMyhRjb1djlaftEPHxaqu4qXECKF6IuKL6/4djR6SsRGySxa1vbdlkBQnc7Vg/BjoT7iUpwaOm5cAiBwibhq+V2WvzU9mwVTFhSmwhaSzdOyulmJOtb3r1mDSiSFRtw1Ic8N3DWtimqhmw="
const licenseKey_web: string = "AUqOdQmsFy1TGIN5mAKlgV8h39u5OGnoM2V1+6YM8ENcZbih3Wh5gPFtZQhpW6wU1mwC6uN8k1sYFjrlOEgm2HN8xiMVQAJTo2W6lj95xYqdRF02KCY4ke4Pbkvxs6KrlOi3DaejNuQjzOAFQABJ8RONT0PkmAenmAGgyli1kC5gC3pe2EolK7mQnojWO/D1fubHZCXNJumCDYf9hlR+na3W/IHQbsrPT5evUJGeg930cQj1e9qq33eWY4G9tUPjGWdByRqtTj05b46WkhqAZzFek/dbm6R3TW48+frr4ee1SUE7cRBYmVW5vKrx3AXJZFYa4ArWGPIt6oWVXZIBDHoS3PpFeLLsQiajBXy6c/0scfyyWNQxS7A2tFaGymQLYnZ9csW7FrC8xtxTZ+EwT9wFF5ZY+RKe1JBnXcEBWDIXTTzwH7jEIdVJoZaGQ+5EH0PMCPa1DC+UirMqq55hw9ZD0os2EVjXp73vO0Q7vbFrLnCZtZseWyzx7UPcOwPnviQZN/SxsMNiiE4EtTJDQg0pfC0lsSF1EVdOUrrkWFrXV7bFfh8FJKX2ohM76YX58UqUT0+kboZXbWNrJeNFVbMf7qWEVS/r8cVkPit64s61nmV+OiZ/JosCdAnWwWQq13koztYagt2SisYtFOJxRXQooL+ob2l9aI5ZGEyRQBICWS3rO1L9bs6xn+DQIG3toJZEHIJ1NrOG3g4r28GGl6Aw4TGNBdtv/wVb1/KbvarX1hgPBgrsTunvzhUNpju3NEH0Cs9pPEbI/Gx/54Z3l2VR46ebjbmEucg2";
const engineLocation: string = "https://unpkg.com/scandit-sdk/build"; // could also be e.g. "build"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScanditSdkModule.forRoot(licenseKey_web, engineLocation)],
  bootstrap: [AppComponent]
})
// tslint:disable-next-line:no-unnecessary-class
export class AppModule {}
