import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

// src/components/BullCrud/index.tsx
import { Item } from '@/utils/types'; // Ensure correct path

interface BullCrudProps {
  data: Item[];
  setData: Dispatch<SetStateAction<Item[]>>;
  dataEdit: Item; // Ensure this matches the Item type
  setDataEdit: Dispatch<SetStateAction<Item>>;
  isOpen: boolean;
  onClose: () => void;
}

export const BullCrud: React.FC<BullCrudProps> = ({
  data,
  setData,
  dataEdit,
  setDataEdit,
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [nomeFantasia, setNomeFantasia] = useState(dataEdit.nomeFantasia || "");
  const [idade, setIdade] = useState(dataEdit.idade || "");
  const [peso, setPeso] = useState(dataEdit.peso || "")
  const [vaquejadas, setVaquejadas] = useState(dataEdit.vaquejadas || "")


  const handleSave = () => {
    if (!name || !nomeFantasia || !idade || !peso || !vaquejadas) return

    if (bullAlreadyExists()) {
      return alert("Boi já registrado!")
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, nomeFantasia, idade, peso, vaquejadas }
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, nomeFantasia, idade, peso, vaquejadas }]
      : [...(data ? data : [])]

    localStorage.setItem("CRUD_BOI", JSON.stringify(newDataArray))

    setData(newDataArray)

    onClose()
  }

  const bullAlreadyExists = () => {
    if (dataEdit.name !== name && data?.length) {
      return data.find((item) => item.name === name)
    }

    return false
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className={`text-center`}>CRUD de Bois</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl display={"flex"} flexDir={"column"} gap={4}>
            <Box>
              <FormLabel>Nome</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Apelido</FormLabel>
              <Input type="text" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Idade</FormLabel>
              <Input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Peso</FormLabel>
              <Input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Vaquejadas</FormLabel>
              <Input type="number" value={vaquejadas} onChange={(e) => setVaquejadas(e.target.value)} required />
            </Box>

          </FormControl>
        </ModalBody>
        <ModalFooter justifyContent={"start"}>
          <Button colorScheme="green" mr={3} onClick={handleSave}>
            Salvar
          </Button>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}

export default BullCrud