<!--局部样式-->
<style scoped>
    .viewGraph3d {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        padding-top: 60px;
    }
</style>

<!--局部覆盖样式-->
<style>
</style>

<template>
    <div class="viewGraph3d">
        <div class="graph"></div>
    </div>
</template>

<script>
    import api from "@/api";
    import ForceGraph3D from "3d-force-graph";
    import SpriteText from "three-spritetext";

    export default {
        name: "viewGraph3d",
        props: {

        },
        data () {
            return {
                //#region 页面对象
                    graph: null,
                //#endregion

                //#region 页面内容绑定数据
                    searchType: "qq",
                    searchNum: "",
                //#endregion

                //#region 页面样式绑定数据
                //#endregion
            };
        },
        watch: {

        },
        computed: {
            //#region 常量计算属性
            //#endregion

            //#region 数据转换计算属性
            //#endregion
            
            //#region 样式计算属性
            //#endregion
        },
        methods: {
            //#region 页面事件方法
            //#endregion

            //#region 业务逻辑方法
                async b_updateGraph () {
                    let result = null;
                    if (this.searchType == "qq") {
                        result = await api.queryQQExtGraph(this.searchNum);
                    }
                    else if (this.searchType == "group") {
                        result = await api.queryGroupGraph(this.searchNum);
                    }
                    if (result) {
                        console.log(result);
                        let groupList = result.group.map(item => ({
                            id: item.groupNum,
                            type: "group",
                            name: item.groupTitle,
                            group: item,
                        }));
                        let memberList = result.member.map(item => ({
                            id: item.memberQQNum,
                            type: "member",
                            name: item.memberQQNum,
                            member: item,
                        }));
                        let linkList = result.link.map(item => ({
                            source: item.linkQQNum,
                            target: item.linkGroupNum,
                            name: item.linkNick,
                            link: item,
                        }));
                        let gData = {
                            nodes: groupList.concat(memberList),
                            links: linkList,
                        };
                        this.graph.graphData(gData)
                        .nodeAutoColorBy('id')
                        .nodeThreeObject(node => {
                            let text = "";
                            if (node.type == "group") {
                                text = node.group.groupTitle;
                            }
                            else if (node.type == "member") {
                                let link = linkList.find(link => link.source == node.member.memberQQNum);
                                if (link) {
                                    text = link.link.linkNick;
                                }
                                else {
                                    text = node.member.memberQQNum;
                                }
                            }
                            const sprite = new SpriteText(text);
                            sprite.color = node.color;
                            // sprite.color = node.color;
                            sprite.textHeight = 8;
                            return sprite;
                        });
                    }
                },
            //#endregion

            //#region 接口访问方法
            //#endregion

            //#region 数据转换方法
            //#endregion

            //#region 自动样式方法
            //#endregion

            //#region 其他方法
            //#endregion
        },
        created () {
            this.searchType = this.$route.query.search;
            if (!this.searchType) {
                this.searchType = "qq";
            }
            this.searchNum = this.$route.query.num;
            if (!this.searchNum) {
                this.searchNum = "10001";
            }
            this.b_updateGraph();
        },
        mounted () {
            const forceGraph3D = ForceGraph3D();
            this.graph = forceGraph3D(this.$el.querySelector(".graph"));
        },
        components: {

        },
    };
</script>