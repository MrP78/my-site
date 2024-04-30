import React from "react";
import Cards from "../../features/cards";
import { Article } from "@/app/lib/definitions";

const simCards: Article[] = [
  {
    id: "1",
    title: "A new Start",
    text: "I'm baby fanny pack mixtape fingerstache jawn keytar snackwave. Fixie mixtape gastropub hell of bitters narwhal, fashion axe jawn bodega boys fam truffaut authentic cred snackwave. Wolf bushwick jianbing kale chips 3 wolf moon. Food truck jean shorts austin gochujang vegan cray. Wolf fanny pack poutine pabst chartreuse JOMO woke humblebrag offal tilde actually shaman meh.",
  },
  {
    id: "2",
    title: "Farty Squids",
    text: "Gluten-free four loko kitsch tofu quinoa, DIY bespoke chillwave artisan disrupt lomo kombucha photo booth activated charcoal bicycle rights. Cardigan enamel pin scenester keffiyeh street art locavore gochujang gluten-free you probably haven't heard of them asymmetrical cred. Dreamcatcher ramps meh sustainable actually selfies cronut unicorn gorpcore normcore echo park quinoa kickstarter vape. Trust fund gatekeep deep v adaptogen williamsburg microdosing tousled art party next level post-ironic yes plz shabby chic humblebrag. Iceland aesthetic single-origin coffee helvetica chambray. Vegan kitsch live-edge dreamcatcher quinoa. Fashion axe irony ennui, vinyl big mood bespoke knausgaard tacos kinfolk humblebrag hot chicken waistcoat.",
  },
  {
    id: "3",
    title: "Fing Longer",
    text: "Swag fingerstache neutral milk hotel vinyl, adaptogen roof party mustache literally vegan lo-fi VHS blog. Enamel pin synth vibecession lumbersexual neutral milk hotel ethical umami shaman biodiesel. Ennui pok pok wayfarers man braid, +1 gastropub tilde praxis chartreuse bespoke. Locavore ethical photo booth, health goth grailed austin shoreditch single-origin coffee adaptogen fanny pack. Master cleanse 90's drinking vinegar, lo-fi pug man braid paleo disrupt celiac. Gentrify chia gluten-free taiyaki woke XOXO artisan shaman.",
  },
];

const page = () => {
  return (
    <main>
      <section className="purple-section">
        <div className="heading-1 text-center">Person page</div>
        <Cards articles={simCards} />
      </section>
    </main>
  );
};

export default page;
