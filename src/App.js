import image1 from './images/image1.png';

function App() {
  return (
    <div className="mx-auto pb-32 bg-white">
      
      <div className="bg-white z-40 fixed -top-12 h-48 w-full blur-xl" ></div>
      <div className="bg-white z-40 fixed -bottom-12 h-48 w-full blur-xl"></div>

      <div className="flex flex-col w-screen h-screen items-center ">
        <div className="flex md:text-8xl text-4xl flex-grow font-redaction text-gray-700 self-center">
          <div className=" my-auto mix-blend-color-multiply text-center">Signature<br/>Economies</div>
        </div>

        <div className="animate text-gray-700 pb-48">
          <svg
            width="32"
            height="32"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-col py-16 items-center justify-center">
        <div className="relative group z-50 ">
          <img
            src={image1}
            className="group-hover:bg-white  group-hover:shadow-lg rounded-lg transition-all p-8"
            alt="logo"
          />
          <div className=" select-none w-48 absolute right-0 left-0 z-10 rounded-lg -bottom-4 mx-auto text-transparent group-hover:text-white font-redaction text-xl shadow-none group-hover:shadow-lg bg-transparent text-center h-12 flex items-center justify-center group-hover:bg-indigo-400 transition-all">
            Mint
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-16 gap-y-12 text-2xl font-garamond text-center items-center justify-center">
        <div className="">
          The{' '}
          <span
            className="underline font-bold"
            href="https://ethblock.art/create/1/910815"
          >
            signature style
          </span>{' '}
          for Ethereum block 910815
        </div>
        <div>
          To bear and not to own; <br /> to act and not lay claim;
          <br /> to do the work and let it go:
          <br /> for just letting it go
          <br /> is what makes it stay.
        </div>
        <div>
          -- Chapter 2,{' '}
          <span className="font-bold underline">Tao Te Ching</span>
        </div>
        <div>
          Empty-handed <br />
          I entered into this world,
          <br />
          Barefoot I leave it.
          <br />
        </div>
        <div>
          <span className="font-bold underline">-- Kozan Ichikyo</span>
        </div>
      </div>

      <div className="mx-auto flex flex-col py-16 w-[800px] gap-y-12 text-2xl font-garamond text-justify items-center justify-center">
        <div>
          Public blockchains present a paradox of ownership. No-one controls
          them and anyone can use them, given a connection and an ability to
          speak the common tongue. The network is ownerless, yet anyone who
          creates a key ‘owns’ any coins associated with it, so everyone is an
          owner. This confusion reveals how ‘ownership’ is shifting and
          highlights the opportunity we have not to implement an ‘ownership
          economy’, but to reimagine what being an owner means.
        </div>
        <div>
          We can begin this process by asking, “What do I actually control?”
        </div>
        <div>
          In Bitcoin, I can sign over an unspent transaction output to another
          address. In Ethereum and other account-based models, I can sign a
          message which changes a value stored in shared state1. In each case, I
          am not the sole possessor or controller, I am a signatory on an event
          shared with everyone who participates in the network.
        </div>
        <div>
          So, ownership in digital economies is really about the meaningful
          signatures required to execute state changes while maintaining
          consensus. Is ownership shifting from an ability to demonstrate
          control or possession to the ability to make meaning? If so, the
          change in signification is a radical one, because ownership is
          traditionally about exclusive rights, whereas meaning is made valuable
          by how widely it is shared. The medium may be massaging ownership to
          mean its opposite: “content can now be proliferated instead of
          protected.”
        </div>
        <div>
          The very first proto-NFTs hinted at this shift. “Towards An Ownership
          Layer for the Internet” speaks about tractable solutions to “make
          ownership actions of digital property universally accessible.” Only in
          web3 can the words ‘ownership’ and ‘universally accessible’ be found
          together sensibly. Indeed, the first work about ownership and art in
          Ethereum ends by pointing out that this network differs from
          traditional art markets because it is public, transparent and
          voluntary.
        </div>
        <div>
          Perhaps all this work is not about the right to control, but
          responsibility? Having no intermediaries creates certain benefits, but
          it is - as always - a tradeoff: if you misplace your mnemonic, it
          means no more magic internet money and there is no customer service to
          help you. This can be addressed by interdependent architectures and,
          in the context of responsibility not just for our own keys but the
          recovery of others, “Make meaningful economies” is a more crafty2
          cultural signal than “Own your piece of the economy”.
        </div>
        <div>
          It’s also critical that our terms are plural. Our work must not be
          about replicating one dominant economic paradigm, supposedly better
          than the last. It could instead be about cultivating the space for
          many different concepts of value to interface with one another in
          creative ways which don’t aim for cancerous growth, but are
          self-sustaining, responsible and resilient.
        </div>
      </div>

      <div className="w-max mx-auto pt-16 pb-8 mt-16 flex md:text-6xl text-4xl text-center font-redaction text-gray-800 items-center self-center">
        Response-ability
      </div>

      <div className="mx-auto flex flex-col py-16 w-[800px] gap-y-12 text-2xl font-garamond text-justify items-center justify-center">
        <div>
          The phrase ‘not your keys, not your coins’ is often used to connote
          sovereign rights. If you hold the keys, then you have an absolute and
          unimpeachable right to sign as you please. It turns out, though, that
          managing your own keys is risky and hard. The user experience of this
          is bad not because we lack great designers, but because responsibility
          is an inherently difficult feature for which to design3. This is
          because response-ability is not about discrete, individual actions
          which release the most dopamine, but our unique relationships within a
          network. Designing for multiple, simultaneous use is not a practice
          consumer culture values highly.
        </div>
        <div>
          Single sign-ons represent us as separate users and when - neatly
          categorized - we log in, we also hand over authority, become the
          audience, and are subject to someone else’s story. However, signed
          messages which change the state of a network no-one controls require
          recurring participation as we commit individual transactions into a
          shared, relatable context4. The gift of being able to express what
          value means to you is always already bound to the responsibility you
          have to be aware of what you are saying and how you are speaking it
          into the world.
        </div>
        <div>
          Moreover, the ability to bear responsibility is a prerequisite for
          meaningful legal rights, a point made explicit in signature economies.
          Just as there is no meaningful speech on-chain without cost, any
          rights you may enjoy on-chain are simultaneous with the responsibility
          you bear for the keys used to sign for them. Used intentionally,
          digital bearer instruments could be about more than claims or access,
          extending to the “right to care” and the “freedom to exercise
          responsibility”. This kind of careful responsibility signifies the
          same internal state as words like kaitiaki: guardianship that is not
          about control, but relationship5.
        </div>
        <div>
          Can we create a culture where I am wealthy by virtue of what I care
          for, rather than what I control6? Where wealth means “having enough to
          share” because who you are is already enough. Can we create
          environments where what I hold is made valuable because of the
          community to which it binds me? This is what good mechanism design
          crafts: incentive structures which create the context required for
          people to sign a communal record of the things they care for most as
          individuals. The intercourse of personal meaning and collective memory
          is the root of lasting value.
        </div>
      </div>

      <div className="w-max mx-auto pt-16 pb-8 mt-16 flex md:text-6xl text-4xl text-center font-redaction text-gray-800 items-center self-center">
        Re-iterate
      </div>

      <div className="mx-auto flex flex-col py-16 w-[800px] gap-y-12 text-2xl font-garamond text-justify items-center justify-center">
        <div>
          All of which brings us to the word ‘signature’. It connotes both that
          which is irreducibly and uniquely you - your signature dish, signature
          tune, signature shot - and that which binds you contractually to a
          world beyond yourself. In Derrida’s words, it is at once singular and
          iterable. A wonderful phrase that carries the same kind of paradoxical
          structure is the isiZulu saying, “umuntu ngumuntu ngabantu”: a human
          being is only a human being through other human beings. We have here
          the possibility of individuation: you can become a full human being;
          but you can only do so in community. You can only do so through
          fulfilling your responsibilities in relationship, not through
          asserting your rights.
        </div>
        <div>
          Even the word ‘economies’ contains this same double-directedness. It
          comes from the Greek oikos, which means ‘house’. Sustainable household
          management requires micro insights into each of our habits, as well as
          macro perspectives of our shared habitations, including the planet
          which houses us all. Home is an irreducible, internal feeling that
          simultaneously requires relationship and familiarity with others.
        </div>
        <div>
          Similarly, meaningful words arise due to individual creativity within
          a community who agrees upon their use, which is why language itself is
          the only logically decentralized system we know. When what we say and
          how we say it invites people in and calls up a response, meaning is
          made more widely accessible7. When we cast these new networks as
          economies of sign rather than of ownership, then the game becomes one
          of actively finding more people able to respond, rather than
          extracting rent from my exclusive right to some artificially scarce
          series of bits.
        </div>
        <div>
          Economies of sign emerge from the shared experience of public
          consensus rules, clearly priced opcodes, and executable speech. The
          value of such economies is held in positively signed individual
          messages which enact meaning within the context of a collective record
          that no-one controls. This doesn’t mean we can now name (or code) the
          dao; it just means we can iteratively sign into existence the kinds of
          shared state which will allow individuals to experience harmoniously
          what words like dao signify in their personal contexts.
        </div>
        <div>
          How can I take responsibility without the resources to make my
          signature meaningful, though? I have tried to use words to speak my
          imagination into existence, and have seen the limits of such work. My
          signatures do not move markets. However, markets are not the arbiters
          of meaning, they are mechanisms for efficient resource allocation.
          Your signature is not made meaningful by its effects: your signature
          is meaningful by virtue of its singular existence. New forms of
          ignorance and injustice will always appear, yet knowing this and still
          having the will and creativity to iterate over incentive structures is
          what will continually imbue our shared record with true beauty.
        </div>
      </div>

      <div className="mx-auto flex flex-col w-[600px] gap-y-4 text-2xl font-garamond text-center text-gray-800">
      “Everything depends on the individual human being, regardless of how small a number of like-minded people there are […] on each person […] creatively making the meaning of life a reality in his or her own being.”

      <div className="font-bold">
      - Viktor Frankl
      </div>
      </div>

      <div className="w-max mx-auto pt-16 pb-8 mt-16 flex md:text-6xl text-4xl text-center font-redaction text-gray-800 items-center self-center">
      Song of Signs
      </div>

    </div>
  );
}

export default App;
