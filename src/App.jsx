import { Hero,
  CustomerReview,
  Footer,
  Subscribe,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
 } from "./sections";
 import Nav from "./componets/Nav";
const App = () => (
  <main className="relative">
    
    
    <section ><Nav/></section>
    
    <section ><Hero/></section>
    <section className="padding"><PopularProducts/></section>
    <section className="padding"><SuperQuality/></section>
    <section className="py-10 padding-x"><Services/></section>
    <section className="padding"><SpecialOffer/></section>
    <section className="bg-pale-blue padding"><CustomerReview/></section>
    <section className="w-full py-16 padding-x sm:py-32"><Subscribe/></section>
    <section className="pb-8 bg-black padding-x padding-t"><Footer /></section>
  </main>
);

export default App;