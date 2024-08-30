'use client'
// src/components/Bull/index.tsx
import { Item } from '@/utils/types';

import BullCrud from "@/components/BullCrud";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useDisclosure
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// interface Item {
//   name: string;
//   nomeFantasia: string
//   idade: number
//   peso: number
//   vaquejadas: number
// }

export default function Bull() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState<Item[]>([])

  const [dataEdit, setDataEdit] = useState<Item>({
    name: '',
    nomeFantasia: '',
    idade: 3,
    peso: 0, // Default value
    vaquejadas: 0, // Default value
  });


  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  useEffect(() => {
    const item = localStorage.getItem("CRUD_BOI");
    const db_boi = item ? JSON.parse(item) as Item[] : [];
    setData(db_boi);
  }, []);

  const handleRemove = (name: string) => {
    const newArray = data.filter((item) => item.name !== name);
    setData(newArray);
    localStorage.setItem("CRUD_BOI", JSON.stringify(newArray));
  };

  return (
    <Flex
      h="100vh"
      align={"center"}
      justify={"center"}
      fontSize={"20px"}
      fontFamily={"fantasy"}
      className={`w-full`}
    >
      <Box maxW={1200} w={"100%"} h={"100vh"} py={10} px={2}>
        <h1 className={`text-center font-caveat lg:text-5xl 3xl:text-8xl`}>Bois Cadastrados no sistema</h1>
        <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>
          Cadastrar Boi
        </Button>

        <Box overflowY={"auto"} height={"100%"} mt={6}>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Nome
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Apelido
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Idade
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Peso
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Vaquejadas
                </Th>
                <Th p={0} w={isMobile ? "5%" : "10%"}></Th>
                <Th p={0} w={isMobile ? "5%" : "10%"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, nomeFantasia, idade, peso, vaquejadas }, index) => (
                <Tr key={index} cursor={"pointer"} _hover={{ bg: "amber.500" }}>
                  <Td textAlign={"center"} fontSize={20}>{name}</Td>
                  <Td textAlign={"center"} fontSize={20}>{nomeFantasia}</Td>
                  <Td textAlign={"center"} fontSize={20}>{idade}</Td>
                  <Td textAlign={"center"} fontSize={20}>{peso}</Td>
                  <Td textAlign={"center"} fontSize={20}>{vaquejadas}</Td>
                  <Td px={4}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ name, nomeFantasia, idade, peso, vaquejadas, index }),
                        onOpen()
                      ]}
                    />
                  </Td>
                  <Td px={4}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(name)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <BullCrud isOpen={isOpen} onClose={onClose} data={data} setData={setData} dataEdit={dataEdit} setDataEdit={setDataEdit} />
      )}
    </Flex>
  )
}