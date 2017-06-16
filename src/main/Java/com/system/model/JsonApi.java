package com.system.model;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

/**
 * Created by fenghui on 2016/1/28.
 */
public class JsonApi {
    private int status;
    private String msg;
    private Object data;

    public JsonApi() {
        status = 0;
        msg="请求成功";
    }

    public JsonApi(int status) {
        this.status = status;
    }

    public JsonApi(String msg) {
        this.status = 1;
        this.msg = msg;
    }

    public JsonApi(int status, String msg, Object data) {
        this.status = status;
        this.msg = msg;
        this.data=data;
    }

    public JsonApi(Object data) {
        this.status = 0;
        this.data = data;
    }

    public JsonApi(Object data, int status) {
        this.status = status;
        this.data = data;
    }

    public static String loadContent(String url) throws IOException {
        return loadContent(url, "utf-8");
    }

    public static String loadContent(String url, String charset) throws IOException {
        StringBuilder reader = new StringBuilder();
        URL urlObject = new URL(url);
        URLConnection uc = urlObject.openConnection();
        uc.setConnectTimeout(10000);//设置超时时间
        uc.setReadTimeout(10000);
        BufferedReader in = new BufferedReader(new InputStreamReader(uc.getInputStream(), charset));
        String inputLine = null;
        while ((inputLine = in.readLine()) != null) {
            reader.append(inputLine);
        }
        in.close();
        return reader.toString();
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public JsonApi(int status, String msg) {
        this.status = status;
        this.msg = msg;
    }


}
