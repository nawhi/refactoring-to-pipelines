describe("Exercise 10 - Flat Mapping Part 2", () => {
  it("extracts a list of all companies", () => {
    const directory: Directory = [
      {
        category: "VCS Hosting",
        companies: [
          {
            name: "GitHub",
            website: "github.com",
          },
          {
            name: "GitLab",
            website: "gitlab.com",
          },
          {
            name: "BitBucket",
            website: "bitbucket.com",
          },
        ],
      },
      {
        category: "Cloud Computing Platforms",
        companies: [
          {
            name: "Amazon Web Services",
            website: "aws.amazon.com",
          },
          {
            name: "Google Cloud Platform",
            website: "cloud.google.com",
          },
        ],
      },
    ];

  });
});

type Company = { name: string; website: string };
type DirectoryEntry = { category: string; companies: Company[] };
type Directory = DirectoryEntry[];

