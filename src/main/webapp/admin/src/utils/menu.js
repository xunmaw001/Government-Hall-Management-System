const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"帖子类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryForum"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"建言献策类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJianyanxiance"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"举报投诉类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJubaotousu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"资料类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZiliao"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公积金缴费管理",
                        "menuJump":"列表",
                        "tableName":"gongjijinJiaofei"
                    }
                ],
                "menu":"公积金缴费管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"医保卡缴费管理",
                        "menuJump":"列表",
                        "tableName":"shebaokaJiaofei"
                    }
                ],
                "menu":"医保卡缴费管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"建言献策管理",
                        "menuJump":"列表",
                        "tableName":"jianyanxiance"
                    }
                ],
                "menu":"建言献策管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"举报投诉管理",
                        "menuJump":"列表",
                        "tableName":"jubaotousu"
                    }
                ],
                "menu":"举报投诉管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"单页数据管理",
                        "menuJump":"列表",
                        "tableName":"singleSeach"
                    }
                ],
                "menu":"单页数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"资料管理",
                        "menuJump":"列表",
                        "tableName":"ziliao"
                    }
                ],
                "menu":"资料管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公积金缴费管理",
                        "menuJump":"列表",
                        "tableName":"gongjijinJiaofei"
                    }
                ],
                "menu":"公积金缴费管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"医保卡缴费管理",
                        "menuJump":"列表",
                        "tableName":"shebaokaJiaofei"
                    }
                ],
                "menu":"医保卡缴费管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"建言献策管理",
                        "menuJump":"列表",
                        "tableName":"jianyanxiance"
                    }
                ],
                "menu":"建言献策管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"举报投诉管理",
                        "menuJump":"列表",
                        "tableName":"jubaotousu"
                    }
                ],
                "menu":"举报投诉管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"资料管理",
                        "menuJump":"列表",
                        "tableName":"ziliao"
                    }
                ],
                "menu":"资料管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
