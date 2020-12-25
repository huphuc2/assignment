import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export const store = new VueX.Store({
    state: {
        currentPage: 1,
        pageNumber: 1,
        perPage: 5,
        totalRows: 1,
        product: {
            fields: [{
                key: "productName",
                label: "Tên sản phẩm",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light text-secondary",
            },
            {
                key: "dayCreate",
                label: "Ngày tạo",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light text-secondary",
            },
            {
                key: "dayEdit",
                label: "Ngày cập nhật gần nhất",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light text-secondary",
            },

            {
                key: "price",
                label: "Giá",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light text-secondary",
            },
            {
                key: "status",
                label: "Trạng thái",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light text-secondary",
            },
            {
                key: "edit",
                label: "Thao tác",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light text-center text-secondary",
            }],
            items: [{

                productName: "Apple",
                dayCreate: "",
                dayEdit: "",
                price: "Đang làm",
                edit: "",

            }]
        },
        employee: {
            fields: [{
                key: "fullName",
                label: "Tên đầy đủ",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light text-secondary",
            },
            {
                key: "userName",
                label: "Tên đăng nhập",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light",
            },
            {
                key: "dateCreate",
                label: "Ngày được tạo",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light text-center",
            },
            {
                key: "status",
                label: "Trạng thái",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light",
            },
            {
                key: "edit",
                label: "Thao tác",
                thClass: "border border-left-0 border-right-0 border-bottom-1 bg-light text-center",
            },
            ],
            items: [{
                fullName: "Dickerson Macdonald",
                userName: "dickerson",
                dateCreate: "",
                status: "Đang làm",
                edit: "",
            },
            {
                fullName: "Larsen Shaw",
                userName: "larsen",
                dateCreate: "",
                status: "Đang làm",
                edit: "",
            },
            {
                fullName: "Mini Navarro",
                userName: "navarro",
                dateCreate: "",
                status: "Nghỉ việc",
                edit: "",
            },
            {
                fullName: "Geneva Wilson",
                userName: "geneva",
                dateCreate: "",
                status: "Nghỉ việc",
                edit: "",
            },
            {
                fullName: "Jami Carney",
                userName: "jami",
                dateCreate: "",
                status: "Đang làm",
                edit: "",
            },
            ],
        }
    },
    getters: {
        lengthItems: state => {
            return state.employee.items.length;
        }
    },
    mutations: {
        updateTotalRows(state, payload) {
            state.totalRows = payload
        },
        updatePageNumber(state, payload) {
            state.pageNumber = payload
        }

    },
    actions: {
        updateTotalRows({ commit, payload }) {
            commit('updateTotalRows', payload)
        },
        updatePageNumber({ state, payload }) {
            commit('updatePageNumber', payload)
        }
    }
})