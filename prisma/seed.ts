import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Maria Silva",
        email: "maria@ig.com.br",
      },
      {
        name: "João Santos",
        email: "joao@ig.com.br",
      },
      {
        name: "Ana Oliveira",
        email: "ana@ig.com.br",
      },
    ]
  })
};

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
})