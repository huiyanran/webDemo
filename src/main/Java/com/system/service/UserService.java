package com.system.service;

import com.system.dao.IUserDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @auther fenghui
 * @create 2016/12/5.
 */
@Service("UserService")
public class UserService implements IUserService {
    @Resource
    private IUserDao iUserDao;

    public IUserDao getUserDao(){
        return iUserDao;
    }
}
