'use client'
import { BullItem } from '@/utils/types';

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
import { Cow } from '@phosphor-icons/react';
import { useEffect, useState } from "react";

interface LocalItem {
  name: string;
  nomeFantasia: string
  idade: number
  peso: number
  vaquejadas: number
}

export default function Bull() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState<BullItem[]>([])
  const [dataEdit, setDataEdit] = useState<BullItem>({
    name: '',
    nomeFantasia: '',
    idade: 3,
    peso: 0,
    vaquejadas: 0,
  });


  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  useEffect(() => {
    const item = localStorage.getItem("CRUD_BOI");
    const db_boi = item ? JSON.parse(item) as LocalItem[] : [];
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
      <Box w={"100%"} py={10} px={2}>
        <span className={`w-full flex justify-center items-center gap-1`}>
          <Cow size={32} weight='duotone' />
          <h1 className={`text-center font-caveat text-4xl 3xl:text-8xl`}>Bois Cadastrados no sistema</h1>
        </span>

        <Button colorScheme="blue" onClick={() => [setDataEdit({
          name: dataEdit.name,
          nomeFantasia: dataEdit.nomeFantasia,
          idade: dataEdit.idade,
          peso: dataEdit.peso,
          vaquejadas: dataEdit.vaquejadas,
        }), onOpen()]}>
          Cadastrar Boi
        </Button>

        <Box overflowY={"auto"} height={"100%"} mt={6} bgColor={'ivory'}>
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
                <Tr key={index} cursor={"pointer"} color={"black"} _hover={{ bg: "amber.500" }}>
                  <Td textAlign={"center"} fontSize={20}>{name}</Td>
                  <Td textAlign={"center"} fontSize={20}>{nomeFantasia}</Td>
                  <Td textAlign={"center"} fontSize={20}>{idade}</Td>
                  <Td textAlign={"center"} fontSize={20}>{peso}kg</Td>
                  <Td textAlign={"center"} fontSize={20}>{vaquejadas}</Td>
                  <Td px={4}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ name, nomeFantasia, idade, peso, vaquejadas }),
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