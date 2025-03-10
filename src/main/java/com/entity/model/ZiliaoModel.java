package com.entity.model;

import com.entity.ZiliaoEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;


/**
 * 资料
 * 接收传参的实体类
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了）
 * 取自ModelAndView 的model名称
 */
public class ZiliaoModel implements Serializable {
    private static final long serialVersionUID = 1L;




    /**
     * 主键
     */
    private Integer id;


    /**
     * 资料编号
     */
    private String ziliaoUuidNumber;


    /**
     * 资料名称
     */
    private String ziliaoName;


    /**
     * 资料配图
     */
    private String ziliaoPhoto;


    /**
     * 资料类型
     */
    private Integer ziliaoTypes;


    /**
     * 资料文件
     */
    private String ziliaoFile;


    /**
     * 资料介绍
     */
    private String ziliaoContent;


    /**
     * 资料录入时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
    private Date insertTime;


    /**
     * 创建时间 show1 show2 nameShow
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
    private Date createTime;


    /**
	 * 获取：主键
	 */
    public Integer getId() {
        return id;
    }


    /**
	 * 设置：主键
	 */
    public void setId(Integer id) {
        this.id = id;
    }
    /**
	 * 获取：资料编号
	 */
    public String getZiliaoUuidNumber() {
        return ziliaoUuidNumber;
    }


    /**
	 * 设置：资料编号
	 */
    public void setZiliaoUuidNumber(String ziliaoUuidNumber) {
        this.ziliaoUuidNumber = ziliaoUuidNumber;
    }
    /**
	 * 获取：资料名称
	 */
    public String getZiliaoName() {
        return ziliaoName;
    }


    /**
	 * 设置：资料名称
	 */
    public void setZiliaoName(String ziliaoName) {
        this.ziliaoName = ziliaoName;
    }
    /**
	 * 获取：资料配图
	 */
    public String getZiliaoPhoto() {
        return ziliaoPhoto;
    }


    /**
	 * 设置：资料配图
	 */
    public void setZiliaoPhoto(String ziliaoPhoto) {
        this.ziliaoPhoto = ziliaoPhoto;
    }
    /**
	 * 获取：资料类型
	 */
    public Integer getZiliaoTypes() {
        return ziliaoTypes;
    }


    /**
	 * 设置：资料类型
	 */
    public void setZiliaoTypes(Integer ziliaoTypes) {
        this.ziliaoTypes = ziliaoTypes;
    }
    /**
	 * 获取：资料文件
	 */
    public String getZiliaoFile() {
        return ziliaoFile;
    }


    /**
	 * 设置：资料文件
	 */
    public void setZiliaoFile(String ziliaoFile) {
        this.ziliaoFile = ziliaoFile;
    }
    /**
	 * 获取：资料介绍
	 */
    public String getZiliaoContent() {
        return ziliaoContent;
    }


    /**
	 * 设置：资料介绍
	 */
    public void setZiliaoContent(String ziliaoContent) {
        this.ziliaoContent = ziliaoContent;
    }
    /**
	 * 获取：资料录入时间
	 */
    public Date getInsertTime() {
        return insertTime;
    }


    /**
	 * 设置：资料录入时间
	 */
    public void setInsertTime(Date insertTime) {
        this.insertTime = insertTime;
    }
    /**
	 * 获取：创建时间 show1 show2 nameShow
	 */
    public Date getCreateTime() {
        return createTime;
    }


    /**
	 * 设置：创建时间 show1 show2 nameShow
	 */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    }
