$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "ComputerPageTest",
  "description": "As a User I want to order computer",
  "id": "computerpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11951321300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computerpagetest;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Verify \"Computers\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 261376600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1469287800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iVerifyText(String)"
});
formatter.result({
  "duration": 132182100,
  "status": "passed"
});
formatter.after({
  "duration": 1518205500,
  "status": "passed"
});
formatter.before({
  "duration": 5805352100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computerpagetest;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify \"Desktops\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 162100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1736415500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 1230747600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 10
    }
  ],
  "location": "DesktopPageTest.iVerifyPage(String)"
});
formatter.result({
  "duration": 118056800,
  "status": "passed"
});
formatter.after({
  "duration": 1021191600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9538967500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 88300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1244891600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 658956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "DesktopPageTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 2570769900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 18
    }
  ],
  "location": "DesktopPageTest.selectProcessor(String)"
});
formatter.result({
  "duration": 264208100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectRAM(String)"
});
formatter.result({
  "duration": 140052600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectHDD(String)"
});
formatter.result({
  "duration": 123248300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "DesktopPageTest.selectOS(String)"
});
formatter.result({
  "duration": 124383500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 17
    }
  ],
  "location": "DesktopPageTest.selectSoftware(String)"
});
formatter.result({
  "duration": 140956200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageTest.clickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 102084900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "DesktopPageTest.verifyMessage(String)"
});
formatter.result({
  "duration": 371940300,
  "status": "passed"
});
formatter.after({
  "duration": 1238226700,
  "status": "passed"
});
formatter.before({
  "duration": 7287083200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 346200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1741209100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 1304965200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "DesktopPageTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 1711399000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "DesktopPageTest.selectProcessor(String)"
});
formatter.result({
  "duration": 100652400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectRAM(String)"
});
formatter.result({
  "duration": 170136100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectHDD(String)"
});
formatter.result({
  "duration": 176315400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 11
    }
  ],
  "location": "DesktopPageTest.selectOS(String)"
});
formatter.result({
  "duration": 165890800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 17
    }
  ],
  "location": "DesktopPageTest.selectSoftware(String)"
});
formatter.result({
  "duration": 201396500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageTest.clickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 90609000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "DesktopPageTest.verifyMessage(String)"
});
formatter.result({
  "duration": 921478400,
  "status": "passed"
});
formatter.after({
  "duration": 1554370900,
  "status": "passed"
});
formatter.before({
  "duration": 7433261800,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1656989700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 755768800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "DesktopPageTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 2393224000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "DesktopPageTest.selectProcessor(String)"
});
formatter.result({
  "duration": 91864100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectRAM(String)"
});
formatter.result({
  "duration": 155977900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectHDD(String)"
});
formatter.result({
  "duration": 113057200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "DesktopPageTest.selectOS(String)"
});
formatter.result({
  "duration": 139200400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 17
    }
  ],
  "location": "DesktopPageTest.selectSoftware(String)"
});
formatter.result({
  "duration": 177555300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageTest.clickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 118081500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "DesktopPageTest.verifyMessage(String)"
});
formatter.result({
  "duration": 947365800,
  "status": "passed"
});
formatter.after({
  "duration": 1523408500,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPageTest",
  "description": "As a user I want to login on website",
  "id": "loginpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5716019100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Navigate To LoginPage SuccessFully.",
  "description": "",
  "id": "loginpagetest;user-should-navigate-to-loginpage-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify that \"Welcome, Please Sign In!\" message display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 670700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1310233000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iVerifyThatMessageDisplay(String)"
});
formatter.result({
  "duration": 56706100,
  "status": "passed"
});
formatter.after({
  "duration": 1077288100,
  "status": "passed"
});
formatter.before({
  "duration": 7426872000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify The Error Message With  InValidCredentials.",
  "description": "",
  "id": "loginpagetest;verify-the-error-message-with--invalidcredentials.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter EmailId \"Test1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify that Error message displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 158100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1348698800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 152622500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 120725300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1059010400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatErrorMessageDisplayed()"
});
formatter.result({
  "duration": 3062279700,
  "status": "passed"
});
formatter.after({
  "duration": 1376703100,
  "status": "passed"
});
formatter.before({
  "duration": 5540631900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User Should LogIn SuccessFully With ValidCredentials.",
  "description": "",
  "id": "loginpagetest;verify-that-user-should-login-successfully-with-validcredentials.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Sanity"
    },
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter valid EmailId \"abcde@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter valid Password \"abcd123\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Verify that LogOut link is display.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 87900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1532996000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcde@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.iEnterValidEmailId(String)"
});
formatter.result({
  "duration": 207462600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123",
      "offset": 24
    }
  ],
  "location": "LoginSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 112829900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1069397600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatLogOutLinkIsDisplay()"
});
formatter.result({
  "duration": 20083589900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027TL-HEN-ICTS-01\u0027, ip: \u0027192.168.0.63\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [642a9069e3e896853e5acfaaa727f2ff, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58400}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58400/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 642a9069e3e896853e5acfaaa727f2ff\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopecommerce.demo.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat com.nopecommerce.demo.pages.LoginPage.verifyLogoutLinkIsDisplayedAfterLogin(LoginPage.java:81)\r\n\tat com.nopecommerce.demo.cucumber.steps.LoginSteps.iVerifyThatLogOutLinkIsDisplay(LoginSteps.java:59)\r\n\tat ✽.Then I Verify that LogOut link is display.(login.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1309617700,
  "status": "passed"
});
formatter.before({
  "duration": 5760662000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify That User Should LogOut SuccessFully()",
  "description": "",
  "id": "loginpagetest;verify-that-user-should-logout-successfully()",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Smoke"
    },
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter valid EmailId \"abcde@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter valid Password \"abcd123\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on LogOut Link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify that LogIn Link Display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 77200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 987462100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcde@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.iEnterValidEmailId(String)"
});
formatter.result({
  "duration": 117020900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123",
      "offset": 24
    }
  ],
  "location": "LoginSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 142734900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1155502900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 20048636500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027TL-HEN-ICTS-01\u0027, ip: \u0027192.168.0.63\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [645dee3531f42cd78ae6dab18158ca3e, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58430}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58430/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 645dee3531f42cd78ae6dab18158ca3e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopecommerce.demo.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.nopecommerce.demo.pages.LoginPage.clickOnLogOutLink(LoginPage.java:77)\r\n\tat com.nopecommerce.demo.cucumber.steps.LoginSteps.iClickOnLogOutLink(LoginSteps.java:76)\r\n\tat ✽.And I click on LogOut Link(login.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.verifyThatLogInLinkDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1391312200,
  "status": "passed"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Feature",
  "description": "As a user I want to register an account on nop commerce website",
  "id": "registration-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5849383400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Register page successfully",
  "description": "",
  "id": "registration-feature;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to Register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 155700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1510538400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 62807400,
  "status": "passed"
});
formatter.after({
  "duration": 1184533100,
  "status": "passed"
});
formatter.before({
  "duration": 5724736100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should Register and create an account successfully",
  "description": "",
  "id": "registration-feature;user-should-register-and-create-an-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter first name \"krishna\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter day \"18\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter month \"May\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter year \"1979\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter random email address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter company name \"Prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter register password \"abcd123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter register confirm password \"abcd123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able to Register and create an account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 738416300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krishna",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 163157500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 139578200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 106831400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 70597200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1979",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 76975400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterRandomEmailAddress()"
});
formatter.result({
  "duration": 232866700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 225776000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 207380500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 186265800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 22009465000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldBeAbleToRegisterAndCreateAnAccountSuccessfully()"
});
formatter.result({
  "duration": 47603900,
  "status": "passed"
});
formatter.after({
  "duration": 1009895700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"\u003ccompany name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;",
  "rows": [
    {
      "cells": [
        "last name",
        "day",
        "month",
        "year",
        "email",
        "company name",
        "password",
        "confirm password",
        "errorMessage"
      ],
      "line": 39,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;1"
    },
    {
      "cells": [
        "A",
        "1",
        "February",
        "2008",
        "abc@gmail.com",
        "Prime",
        "abc123",
        "abc123",
        "First name is required."
      ],
      "line": 40,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;2"
    },
    {
      "cells": [
        "B",
        "1",
        "May",
        "2009",
        "def@gmail.com",
        "Testing",
        "def123",
        "def123",
        "First name is required."
      ],
      "line": 41,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;3"
    },
    {
      "cells": [
        "C",
        "1",
        "November",
        "2010",
        "ghi@gmail.com",
        "Square1",
        "ghi123",
        "ghi123",
        "First name is required."
      ],
      "line": 42,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;4"
    },
    {
      "cells": [
        "D",
        "1",
        "February",
        "2014",
        "jkl@gmail.com",
        "Interior Collection",
        "jkl123",
        "jkl123",
        "First name is required."
      ],
      "line": 43,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;5"
    },
    {
      "cells": [
        "E",
        "1",
        "January",
        "2020",
        "mno@gmail.com",
        "HarrowGS",
        "mno123",
        "mno123",
        "First name is required."
      ],
      "line": 44,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5450640000,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"A\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"February\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2008\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"abc@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Prime\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"abc123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"abc123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 753451500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 149301200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 114903300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 78605400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2008",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 70323200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 182584400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 173703300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 186544400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 145785800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 120116800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 65504100,
  "status": "passed"
});
formatter.after({
  "duration": 1057306400,
  "status": "passed"
});
formatter.before({
  "duration": 5423967500,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"B\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"May\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2009\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"def@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Testing\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"def123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"def123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1473562700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "B",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 211905600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 113272300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 72434400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2009",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 69114800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 182923400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 160595900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 209655400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 278102500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 170199000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 54876300,
  "status": "passed"
});
formatter.after({
  "duration": 956048100,
  "status": "passed"
});
formatter.before({
  "duration": 6178651100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"C\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"November\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2010\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"ghi@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Square1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"ghi123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"ghi123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 88400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 806276900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 145353000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 120383500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "November",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 74493000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 66643300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 159339600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Square1",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 134824900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 140088800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 163494400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 121690600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 48622800,
  "status": "passed"
});
formatter.after({
  "duration": 980269900,
  "status": "passed"
});
formatter.before({
  "duration": 6133762500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"D\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"February\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2014\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"jkl@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Interior Collection\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"jkl123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"jkl123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1440900600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 137328400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 134209200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 71460600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2014",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 81847200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jkl@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 174502200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interior Collection",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 151570200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jkl123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 156290600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jkl123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 165603700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 122210500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 48972500,
  "status": "passed"
});
formatter.after({
  "duration": 1012914600,
  "status": "passed"
});
formatter.before({
  "duration": 5395423200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"E\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"January\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"mno@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"HarrowGS\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"mno123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"mno123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1510585000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 142792900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 143578100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 104260900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 73534400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mno@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 143776600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HarrowGS",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 145524700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mno123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 173137900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mno123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 146735600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 118089800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 51050900,
  "status": "passed"
});
formatter.after({
  "duration": 1865228800,
  "status": "passed"
});
});