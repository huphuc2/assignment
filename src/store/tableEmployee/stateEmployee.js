export const employee = state => {
    return table() {
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
            status: "Đang làm" ,
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
            status:  "Nghỉ việc" ,
            edit: "",
        },
        {
            fullName: "Jami Carney",
            userName: "jami",
            dateCreate: "",
            status: "Đang làm" ,
            edit: "",
        },
        ],
    }
}