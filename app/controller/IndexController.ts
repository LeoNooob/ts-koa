import { Context } from "koa";
import logger from "../logger";

class IndexController {
    async index(ctx: Context) {
        logger.info('msg','msg')
        ctx.body = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
}

export default new IndexController