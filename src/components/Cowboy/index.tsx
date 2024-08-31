'use client'

import { CowboyItem } from '@/utils/types';
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
import { UserCircle } from '@phosphor-icons/react';
import { useEffect, useState } from "react";
import CowboyCrud from '../CowboyCrud';

interface LocalItem {
  name: string;
  nomeFantasia: string
  idade: number
  peso: number
  estado: string
  vaquejadas: number
  vitorias: number
  nomeAssistente: string
  campeao: number
  odds: number
}

export default function Cowboy() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState<CowboyItem[]>([])
  const [dataEdit, setDataEdit] = useState<CowboyItem>({
    name: '',
    nomeFantasia: '',
    idade: 3,
    peso: 0,
    estado: '',
    vaquejadas: 0,
    vitorias: 0,
    nomeAssistente: '',
    campeao: 0,
    odds: 0
  });


  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  useEffect(() => {
    const item = localStorage.getItem("CRUD_VAQUEIRO");
    const db_vaqueiro = item ? JSON.parse(item) as LocalItem[] : [];
    setData(db_vaqueiro);
  }, []);

  const handleRemove = (name: string) => {
    const newArray = data.filter((item) => item.name !== name);
    setData(newArray);
    localStorage.setItem("CRUD_VAQUEIRO", JSON.stringify(newArray));
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
      <Box w={"100%"} h={"100vh"} py={10} px={2}>
        <span className={`w-full flex justify-center items-center gap-1`}>
          <UserCircle size={32} weight='duotone' />
          <h1 className={`text-center font-caveat lg:text-5xl 3xl:text-8xl`}>Vaqueiros Cadastrados no sistema</h1>
        </span>

        <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>
          Cadastrar Vaqueiro
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
                  Estado
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Vaquejadas
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Vitórias
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Assistente
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Campeão
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Odds
                </Th>
                <Th p={0} w={isMobile ? "5%" : "10%"}></Th>
                <Th p={0} w={isMobile ? "5%" : "10%"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, nomeFantasia, idade, peso, estado, vaquejadas, vitorias, nomeAssistente, campeao, odds }, index) => (
                <Tr key={index} cursor={"pointer"} _hover={{ bg: "amber.500" }}>
                  <Td textAlign={"center"} fontSize={20}>{name}</Td>
                  <Td textAlign={"center"} fontSize={20}>{nomeFantasia}</Td>
                  <Td textAlign={"center"} fontSize={20}>{idade}</Td>
                  <Td textAlign={"center"} fontSize={20}>{peso}kg</Td>
                  <Td textAlign={"center"} fontSize={20}>{estado}</Td>
                  <Td textAlign={"center"} fontSize={20}>{vaquejadas}</Td>
                  <Td textAlign={"center"} fontSize={20}>{vitorias}</Td>
                  <Td textAlign={"center"} fontSize={20}>{nomeAssistente}</Td>
                  <Td textAlign={"center"} fontSize={20}>{campeao}</Td>
                  <Td textAlign={"center"} fontSize={20}>{odds}</Td>
                  <Td px={4}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ name, nomeFantasia, idade, peso, estado, vaquejadas, vitorias, nomeAssistente, campeao, odds, index }),
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
        <CowboyCrud isOpen={isOpen} onClose={onClose} data={data} setData={setData} dataEdit={dataEdit} setDataEdit={setDataEdit} />
      )}
    </Flex>
  )
}