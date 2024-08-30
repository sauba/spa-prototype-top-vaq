'use client'

import BullCrud from "@/components/BullCrud"
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
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
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

import Header from "../Header"

export default function Bull() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState([])
  const [dataEdit, setDataEdit] = useState({})

  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  useEffect(() => {
    const db_boi = localStorage.getItem("CRUD_BOI")
      ? JSON.parse(localStorage.getItem("CRUD_BOI"))
      : []

    setData(db_boi)
  }, [setData])

  const handleRemove = (name) => {
    const newArray = data.filter((item) => item.name !== name)

    setData(newArray)

    localStorage.setItem("CRUD_BOI", JSON.stringify(newArray))
  }

  return (
    <>
      <Header />

      <Flex
        h="100vh"
        align={"center"}
        justify={"center"}
        fontSize={"20px"}
        fontFamily={"fantasy"}
      >
        <Box maxW={800} w={"100%"} h={"100vh"} py={10} px={2}>
          <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>
            Novo Cadastro
          </Button>

          <Box overflowY={"auto"} height={"100%"}>
            <Table mt={6}>
              <Thead>
                <Tr>
                  <Th maxW={isMobile ? 5 : 100} fontSize={"20px"}>
                    Nome
                  </Th>

                  <Th maxW={isMobile ? 5 : 100} fontSize={"20px"}>
                    Apelido
                  </Th>

                  <Th maxW={isMobile ? 5 : 100} fontSize={"20px"}>
                    Idade
                  </Th>

                  <Th maxW={isMobile ? 5 : 100} fontSize={"20px"}>
                    Peso
                  </Th>

                  <Th maxW={isMobile ? 5 : 100} fontSize={"20px"}>
                    Vaquejadas
                  </Th>

                  <Th p={0}></Th>
                  <Th p={0}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(({ name, nomeFantasia, idade, peso, vaquejadas }, index) => (
                  <Tr key={index} cursor={"pointer"} _hover={{ bg: "gray.100" }}>
                    <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                    <Td maxW={isMobile ? 5 : 100}>{nomeFantasia}</Td>
                    <Td maxW={isMobile ? 5 : 100}>{idade}</Td>
                    <Td maxW={isMobile ? 5 : 100}>{peso}</Td>
                    <Td maxW={isMobile ? 5 : 100}>{vaquejadas}</Td>
                    <Td p={0}>
                      <EditIcon
                        fontSize={20}
                        onClick={() => [
                          setDataEdit({ name, nomeFantasia, idade, peso, vaquejadas, index }),
                          onOpen()
                        ]}
                      />
                    </Td>
                    <Td p={0}>
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
    </>
  )
}