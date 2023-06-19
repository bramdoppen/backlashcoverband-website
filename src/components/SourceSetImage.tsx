import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@/app/sanityClient";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
