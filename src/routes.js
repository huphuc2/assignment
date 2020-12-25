import ListForm from './vueComponents/listForm.vue'
import Login from './vueComponents/Login.vue'
import EditForm from './vueComponents/EditForm.vue'
import CreateUserForm from './vueComponents/CreateUserForm.vue'
import UserProfile from './vueComponents/UserProfile.vue'
import ProductList from './vueComponents/productList.vue'
import CreateProduct from './vueComponents/CreateProductForm.vue'
export const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/listUser', name: 'listUser', component: ListForm },
    { path: '/edit/:userName', name: 'edit', component: EditForm },
    { path: '/createUser', name: 'createUser', component: CreateUserForm },
    { path: '/userProfile/:userName', name: 'userProfile', component: UserProfile },
    { path: '/productlist', name: 'productList', component: ProductList },
    { path: '/createproduct', name: 'createproduct', component: CreateProduct }
]