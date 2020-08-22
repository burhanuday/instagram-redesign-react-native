const baseImageURL = "https://picsum.photos/400";
const baseAvatarUrl = "https://picsum.photos/100";
// [`${baseImageURL}?random=${Math.random() * 100}`, `${baseImageURL}?random=${Math.random() * 100}`, `${baseImageURL}?random=${Math.random() * 100}`]
// `${baseAvatarUrl}?random=${Math.random() * 100}`

export const posts = [
  {
    id: 1,
    name: "Brannon Stonebridge",
    time_posted: "5:46 PM",
    url: [
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
    ],
    caption: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    likeCount: 179,
    commentCount: 39,
    comments: [
      {
        comment:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        username: "fbiddlecombe0",
      },
      {
        comment:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        username: "labyss1",
      },
      {
        comment: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        username: "rlukovic2",
      },
    ],
    avatar: `${baseAvatarUrl}?random=${Math.random() * 100}`,
    username: "bstonebridge0",
  },
  {
    id: 2,
    name: "Ricardo Devin",
    time_posted: "8:49 AM",
    url: [
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
    ],
    caption:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    likeCount: 103,
    commentCount: 67,
    comments: [
      {
        comment:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        username: "ccalam0",
      },
    ],
    avatar: `${baseAvatarUrl}?random=${Math.random() * 100}`,
    username: "rdevin1",
  },
  {
    id: 3,
    name: "Pamella Fitter",
    time_posted: "12:32 PM",
    url: [
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
    ],
    caption:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    likeCount: 379,
    commentCount: 94,
    comments: [
      {
        comment:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        username: "bgrocott0",
      },
      {
        comment:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        username: "uhandforth1",
      },
      {
        comment:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        username: "upresser2",
      },
    ],
    avatar: `${baseAvatarUrl}?random=${Math.random() * 100}`,
    username: "pfitter2",
  },
  {
    id: 4,
    name: "Norina Sills",
    time_posted: "6:55 AM",
    url: [
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
    ],
    caption:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    likeCount: 1792,
    commentCount: 63,
    comments: [
      {
        comment:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        username: "ltorry0",
      },
      {
        comment:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        username: "kdetocqueville1",
      },
      {
        comment:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        username: "ewaplinton2",
      },
      {
        comment:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        username: "wewbank3",
      },
      {
        comment:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        username: "tmccrow4",
      },
    ],
    avatar: `${baseAvatarUrl}?random=${Math.random() * 100}`,
    username: "nsills3",
  },
  {
    id: 5,
    name: "Chloette Paulack",
    time_posted: "7:27 AM",
    url: [
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
    ],
    caption:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    likeCount: 1017,
    commentCount: 90,
    comments: [
      {
        comment:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        username: "cgoucher0",
      },
      {
        comment:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        username: "smcevilly1",
      },
      {
        comment:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        username: "sbarhams2",
      },
      {
        comment:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        username: "svasser3",
      },
      {
        comment: "In congue. Etiam justo. Etiam pretium iaculis justo.",
        username: "scharge4",
      },
    ],
    avatar: `${baseAvatarUrl}?random=${Math.random() * 100}`,
    username: "cpaulack4",
  },
  {
    id: 6,
    name: "Myrtle Antognazzi",
    time_posted: "12:00 PM",
    url: [
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
    ],
    caption: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    likeCount: 1267,
    commentCount: 39,
    comments: [
      {
        comment:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        username: "kkestell0",
      },
    ],
    avatar: `${baseAvatarUrl}?random=${Math.random() * 100}`,
    username: "mantognazzi5",
  },
  {
    id: 7,
    name: "Zena Handasyde",
    time_posted: "2:19 AM",
    url: [
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
      `${baseImageURL}?random=${Math.random() * 100}`,
    ],
    caption:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    likeCount: 1396,
    commentCount: 54,
    comments: [
      {
        comment: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        username: "jboyen0",
      },
      {
        comment:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        username: "dducket1",
      },
      {
        comment:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        username: "mroalfe2",
      },
      {
        comment: "Fusce consequat. Nulla nisl. Nunc nisl.",
        username: "eklejin3",
      },
      {
        comment:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        username: "pavery4",
      },
    ],
    avatar: `${baseAvatarUrl}?random=${Math.random() * 100}`,
    username: "zhandasyde6",
  },
];
