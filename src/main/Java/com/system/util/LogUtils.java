package com.system.util;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

/**
 * auther fenghui
 * create 2017/6/15.
 */
public class LogUtils {

    static private Logger logger = LogManager.getLogger("order");


    public static void trace(Object object) {
        logger.trace(object);
    }

    public static void debug(Object object) {
        logger.debug(object);
    }

    public static void info(Object object) {
        logger.info(object);
    }

    public static void warn(Object object) {
        logger.warn(object);
    }

    public static void error(Object object) {
        logger.error(object);
    }

    public static void fatal(Object object) {
        logger.fatal(object);
    }
}
