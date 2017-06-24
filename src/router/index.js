import Vue from 'vue'
import Router from 'vue-router'
import HomeTab from '@/components/Home'
import AboutUsTab from '@/components/AboutUs'
import privacyPolicyTab from '@/components/PrivacyPolicy'
import productsTab from '@/components/Products'
import prodRMSTab from '@/components/ProdRMS'
import prodOFCSTab from '@/components/ProdOFCS'
import prodQINTTab from '@/components/ProdQINT'
import supportTab from '@/components/Support'
import contactTab from '@/components/Contact'
import adminTab from '@/components/Administrator'
// import VueResource from 'vue-resource'

Vue.use(Router)
// Vue.use(VueResource)

export default new Router({
    routes: [{
        path: '*', //path: '/', all none existing page will be redirect to index page
        name: 'home',
        component: HomeTab
    }, {
        path: '/aboutUs',
        name: 'aboutUs',
        component: AboutUsTab
    }, {
        path: '/products',
        name: 'Products',
        component: productsTab
    }, {
        path: '/Products-RMS',
        name: 'Products-RMS',
        component: prodRMSTab
    }, {
        path: '/Products-OFCS',
        name: 'Products-OFCS',
        component: prodOFCSTab
    }, {
        path: '/Products-QINT',
        name: 'Products-QINT',
        component: prodQINTTab
    }, {
        path: '/PrivacyPolicy',
        name: 'PrivacyPolicy',
        component: privacyPolicyTab
    }, {
        path: '/support',
        name: 'Support',
        component: supportTab
    }, {
        path: '/contact',
        name: 'Contact',
        component: contactTab
    }, {
        path: '/admin',
        name: 'Administrator',
        component: adminTab
    }]
})
