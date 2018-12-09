import { HomePageObject } from "./home.page";


export {
    HomePageObject,
};

export let homePageObject = ():HomePageObject  => { return new HomePageObject() };