export default function AboutUs() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6 px-6 pb-16 pt-4 sm:px-8">
      <span className="font-display text-2xl text-foreground sm:text-3xl">
        Talisman
      </span>
      <h1 className="font-display text-5xl text-foreground sm:text-6xl">
        About Us
      </h1>
      <div className="h-[3px] w-full max-w-md bg-foreground" />
      <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
        Talisman is a digital archive committed to documenting and sharing
        the stories of historical objects and cultural artifacts from
        non-Western and Indigenous communities.
      </p>
      <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
        For too long, the history of these objects has been told exclusively
        through the lens of colonial acquisition and museum classification.
        We believe that artifacts are not static pieces of history; they are
        active cultural agents whose stories are best told by the communities
        who created them.
      </p>
    </div>
  );
}
