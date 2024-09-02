'use client'

import { HorseItem } from '@/utils/types';
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
import HorseCrud from '../HorseCrud';

interface LocalItem {
  name: string;
  nomeFantasia: string
  idade: number
  peso: number
  haras: string
  vaquejadas: number
  vitorias: number
  nomeVaqueiro: string
  campeao: number
  odds: number
}

export default function Horse() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState<HorseItem[]>([])
  const [dataEdit, setDataEdit] = useState<HorseItem>({
    name: '',
    nomeFantasia: '',
    idade: 3,
    peso: 0,
    haras: '',
    vaquejadas: 0,
    vitorias: 0,
    nomeVaqueiro: '',
    campeao: 0
  });


  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  useEffect(() => {
    const item = localStorage.getItem("CRUD_CAVALO");
    const db_cavalo = item ? JSON.parse(item) as LocalItem[] : [];
    setData(db_cavalo);
  }, []);

  const handleRemove = (name: string) => {
    const newArray = data.filter((item) => item.name !== name);
    setData(newArray);
    localStorage.setItem("CRUD_CAVALO", JSON.stringify(newArray));
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
          <UserCircle size={32} weight='duotone' />
          <h1 className={`text-center font-caveat text-4xl 3xl:text-8xl`}>Cavalos Cadastrados no sistema</h1>
        </span>

        <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>
          Cadastrar Cavalo
        </Button>

        <Box overflowY={"auto"} height={"100%"} mt={6} bgColor={"ivory"}>
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
                  Haras
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Vaquejadas
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Vitórias
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Vaqueiro
                </Th>
                <Th w={isMobile ? "10%" : "20%"} fontSize={20} textAlign={"center"}>
                  Campeão
                </Th>

                <Th p={0} w={isMobile ? "5%" : "10%"}></Th>
                <Th p={0} w={isMobile ? "5%" : "10%"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, nomeFantasia, idade, peso, haras, vaquejadas, vitorias, nomeVaqueiro, campeao }, index) => (
                <Tr key={index} cursor={"pointer"} color={"black"} _hover={{ bg: "amber.500" }}>
                  <Td textAlign={"center"} fontSize={20}>{name}</Td>
                  <Td textAlign={"center"} fontSize={20}>{nomeFantasia}</Td>
                  <Td textAlign={"center"} fontSize={20}>{idade}</Td>
                  <Td textAlign={"center"} fontSize={20}>{peso}kg</Td>
                  <Td textAlign={"center"} fontSize={20}>{haras}</Td>
                  <Td textAlign={"center"} fontSize={20}>{vaquejadas}</Td>
                  <Td textAlign={"center"} fontSize={20}>{vitorias}</Td>
                  <Td textAlign={"center"} fontSize={20}>{nomeVaqueiro}</Td>
                  <Td textAlign={"center"} fontSize={20}>{campeao}</Td>
                  <Td px={4}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ name, nomeFantasia, idade, peso, haras, vaquejadas, vitorias, nomeVaqueiro, campeao, index }),
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
        <HorseCrud isOpen={isOpen} onClose={onClose} data={data} setData={setData} dataEdit={dataEdit} setDataEdit={setDataEdit} />
      )}
    </Flex>
  )
}