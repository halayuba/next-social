const paths = {
  home() {
    return '/'
  },
  discuss() {
    return '/discuss'
  },
  topicShow(topicSlug: string) {
    return `/discuss/topics/${topicSlug}`
  },
  postCreate(topicSlug: string) {
    return `/discuss/topics/${topicSlug}/posts/new`
  },
  postShow(topicSlug: string, postId: string) {
    return `/discuss/topics/${topicSlug}/posts/${postId}`
  },
  search(term: string) {
    return `/discuss/search?term=${term}`
  },
  expenses() {
    return '/expenses'
  },
  accounts() {
    return '/expenses/accounts'
  },
  accountCreate() {
    return '/expenses/accounts/new'
  },
  transactions() {
    return '/expenses/transactions'
  },
  venues() {
    return '/expenses/venues'
  },
  invoices() {
    return '/expenses/invoices'
  },
  jobs() {
    return '/jobs'
  },
  jobSearch(term: string) {
    return `/jobs/search?${term}`
  },
  domains() {
    return '/domains'
  },
  snippets() {
    return '/snippets'
  },
  snippetShow(id: string) {
    return `/snippets/${id}`
  },
  snippetEdit(id: string) {
    return `/snippets/${id}/edit`
  },
  snippetCreate() {
    return '/snippets/new'
  },
  recipes() {
    return '/recipes'
  },
  masternav() {
    return '/master-nav'
  },
  masternavEdit(id: string) {
    return `/master-nav/${id}/edit`
  },
  ecommerce() {
    return '/ecommerce'
  },
  ecommerceAdmin() {
    return '/ecommerce/admin'
  },
  ecommerceProducts() {
    return '/ecommerce/products'
  },
  ecommerceProductsCreate() {
    return '/ecommerce/products/new'
  },
  ecommerceProductsDownload(id: string) {
    return `/ecommerce/products/${id}/download`
  },
  ecommerceProductsEdit(id: string) {
    return `/ecommerce/products/${id}/edit`
  },
  ecommerceOrders() {
    return '/ecommerce/orders'
  },
  ecommerceUsers() {
    return '/ecommerce/users'
  },
  ecommerceCoupons() {
    return '/ecommerce/discount-codes'
  },
  ecommerceCouponsCreate() {
    return '/ecommerce/discount-codes/new'
  },
  evently() {
    return '/evently'
  },
  iskanat() {
    return '/iskanat'
  },
  zafaaf() {
    return '/zafaaf'
  },
  netflix() {
    return '/netflix'
  },
  flexmenu() {
    return '/flexmenu'
  },
  profile() {
    return '/user/profile'
  },
  properties() {
    return '/properties'
  },
  propertiesCreate() {
    return '/properties/new'
  },
  propertyShow(id: string) {
    return `/properties/${id}`
  },
  propertyEdit(id: string) {
    return `/properties/${id}/edit`
  },
  propertiesUserDashboard() {
    return '/properties/user-dashboard'
  },
  propertiesUserDashboardPageNum(pagenum: number) {
    return `/properties/user-dashboard?pagenum=${pagenum}`
  },
  userAvatar() {
    return '/DeadSea_avatar.png'
  },
  logo() {
    return '/logo_iskanat.svg'
  },
  currencyConverter() {
    return '/currency-converter'
  },
  buymecoffee() {
    return '/buymecoffee'
  },
  weather() {
    return '/weather'
  },
  github() {
    return '/github'
  },
  todos() {
    return '/todos'
  },
  projectManagement() {
    return '/project-management'
  },
  auction() {
    return '/auction'
  },
}

export default paths
