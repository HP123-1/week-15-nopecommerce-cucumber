package com.nopecommerce.demo.cucumber;

import com.cucumber.listener.Reporter;

import com.nopecommerce.demo.propertyreader.PropertyReader;
import com.nopecommerce.demo.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hooks extends Utility {
        @Before
        public void openBrowser() {
            selectBrowser(PropertyReader.getInstance().getProperty("browser"));
            Reporter.assignAuthor("krishna");
        }

        @After
        public void tearDown(Scenario scenario) {
            if (scenario.isFailed()) {
                String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
                try {
                    Reporter.addScreenCaptureFromPath(screenShotPath);
                } catch (IOException e) {
                    e.printStackTrace();
                }

            }
            driver.quit();
        }

    }

