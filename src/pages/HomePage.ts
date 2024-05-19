import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import dotenv from 'dotenv'; 
import { URLAssembler } from "../helpers/URLAssembler";
dotenv.config();

/**
 * Class for Home Page
 */
export class HomePage extends BasePage{

    /**
     * Class constructor
     * @param page 
     */
    constructor(page: Page) {
        super(page);
        const baseURl = process.env.BASE_URL as string;
        this.pageRoute = "index";
        this.pageCompleteURL = URLAssembler.getAssembledURL(baseURl, this.pageRoute);
    }
}