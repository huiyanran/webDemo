package com.system.dao;

import com.system.po.User;
import com.system.pojo.UserMapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

/**
 * auther fenghui
 * create 2017/6/15.
 */
@Component
public interface IUserDao extends UserMapper{
    @Select({"select password",
            " from user",
            " where userName = #{userName}"
    })
    User getUser(String userName);
}
