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

// src/components/HorseCrud/index.tsx
import { HorseItem } from '@/utils/types'; // Ensure correct path

interface HorseCrudProps {
  data: HorseItem[];
  setData: Dispatch<SetStateAction<HorseItem[]>>;
  dataEdit: HorseItem; // Ensure this matches the Item type
  setDataEdit: Dispatch<SetStateAction<HorseItem>>;
  isOpen: boolean;
  onClose: () => void;
}

export const HorseCrud: React.FC<HorseCrudProps> = ({
  data,
  setData,
  dataEdit,
  setDataEdit,
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [nomeFantasia, setNomeFantasia] = useState(dataEdit.nomeFantasia || "");
  const [idade, setIdade] = useState(dataEdit.idade || 0);
  const [peso, setPeso] = useState(dataEdit.peso || 0)
  const [haras, setHaras] = useState(dataEdit.haras || "")
  const [vaquejadas, setVaquejadas] = useState(dataEdit.vaquejadas || 0)
  const [vitorias, setVitorias] = useState(dataEdit.vitorias || 0)
  const [nomeVaqueiro, setNomeVaqueiro] = useState(dataEdit.nomeVaqueiro || "")
  const [campeao, setCampeao] = useState(dataEdit.campeao || 0)

  const handleSave = () => {
    if (!name || !nomeFantasia || !idade || !peso || !haras || !vaquejadas || !vitorias || !campeao) return

    if (HorseAlreadyExists()) {
      return alert("Vaqueiro já registrado!")
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, nomeFantasia, idade, peso, haras, vaquejadas, vitorias, nomeVaqueiro, campeao }
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, nomeFantasia, idade, peso, haras, vaquejadas, vitorias, nomeVaqueiro, campeao }]
      : [...(data ? data : [])]

    localStorage.setItem("CRUD_VAQUEIRO", JSON.stringify(newDataArray))

    setData(newDataArray)

    onClose()
  }

  const HorseAlreadyExists = () => {
    if (dataEdit.name !== name && data?.length) {
      return data.find((item) => item.name === name)
    }

    return false
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className={`text-center`}>CRUD de Cavalos</ModalHeader>
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
              <FormLabel>haras</FormLabel>
              <Input type="text" value={haras} onChange={(e) => setHaras(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Vaquejadas</FormLabel>
              <Input type="number" value={vaquejadas} onChange={(e) => setVaquejadas(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Vitórias</FormLabel>
              <Input type="number" value={vitorias} onChange={(e) => setVitorias(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Nome do Vaqueiro</FormLabel>
              <Input type="text" value={nomeVaqueiro} onChange={(e) => setNomeVaqueiro(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Campeão</FormLabel>
              <Input type="number" value={campeao} onChange={(e) => setCampeao(e.target.value)} required />
            </Box>

          </FormControl>
        </ModalBody>
        <ModalFooter justifyContent={"center"}>
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

export default HorseCrud