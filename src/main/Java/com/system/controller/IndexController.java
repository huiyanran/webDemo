package com.system.controller;

import com.system.model.JsonApi;
import com.system.po.User;
import com.system.service.IUserService;
import com.system.util.LogUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;


/**
 * auther fenghui
 * create 2017/6/15.
 */
@Controller
public class IndexController {

    @Resource
    IUserService iUserService;

    @RequestMapping(value = {"/", ""})
    public String index() {
        return "index";
    }

    @RequestMapping(value = {"/test", ""})
    @ResponseBody
    public JsonApi test(@RequestParam("userName") String userName,
                        @RequestParam("password") String password){
        LogUtils.trace("--------------------登录--------------------");

        User user = iUserService.getUserDao().getUser(userName);
        if(user==null){
            return new JsonApi("不存在该用户名");
        }else if(!user.getPassword().equals(password)){
            return new JsonApi("密码错误");
        }else{
            return new JsonApi();
        }
    }
}
