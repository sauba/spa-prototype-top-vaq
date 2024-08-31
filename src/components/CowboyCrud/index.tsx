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

// src/components/CowboyCrud/index.tsx
import { CowboyItem } from '@/utils/types'; // Ensure correct path

interface CowboyCrudProps {
  data: CowboyItem[];
  setData: Dispatch<SetStateAction<CowboyItem[]>>;
  dataEdit: CowboyItem; // Ensure this matches the Item type
  setDataEdit: Dispatch<SetStateAction<CowboyItem>>;
  isOpen: boolean;
  onClose: () => void;
}

export const CowboyCrud: React.FC<CowboyCrudProps> = ({
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
  const [estado, setEstado] = useState(dataEdit.estado || "")
  const [vaquejadas, setVaquejadas] = useState(dataEdit.vaquejadas || 0)
  const [vitorias, setVitorias] = useState(dataEdit.vitorias || 0)
  const [nomeAssistente, setNomeAssistente] = useState(dataEdit.nomeAssistente || "")
  const [campeao, setCampeao] = useState(dataEdit.campeao || 0)
  const [odds, setOdds] = useState(dataEdit.odds || 0)

  const handleSave = () => {
    if (!name || !nomeFantasia || !idade || !peso || !estado || !vaquejadas || !vitorias || !campeao || !odds) return

    if (cowboyAlreadyExists()) {
      return alert("Vaqueiro já registrado!")
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, nomeFantasia, idade, peso, estado, vaquejadas, vitorias, nomeAssistente, campeao, odds }
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, nomeFantasia, idade, peso, estado, vaquejadas, vitorias, nomeAssistente, campeao, odds }]
      : [...(data ? data : [])]

    localStorage.setItem("CRUD_VAQUEIRO", JSON.stringify(newDataArray))

    setData(newDataArray)

    onClose()
  }

  const cowboyAlreadyExists = () => {
    if (dataEdit.name !== name && data?.length) {
      return data.find((item) => item.name === name)
    }

    return false
  }

  return (
    <Modal size={"full"} isOpen={isOpen} onClose={onClose} motionPreset="slideInTop">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className={`text-center`}>CRUD de Vaqueiros</ModalHeader>
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
              <FormLabel>Estado</FormLabel>
              <Input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} required />
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
              <FormLabel>Nome do Assistente</FormLabel>
              <Input type="text" value={nomeAssistente} onChange={(e) => setNomeAssistente(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Campeão</FormLabel>
              <Input type="number" value={campeao} onChange={(e) => setCampeao(e.target.value)} required />
            </Box>

            <Box>
              <FormLabel>Odds</FormLabel>
              <Input type="number" value={odds} onChange={(e) => setOdds(e.target.value)} required />
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

export default CowboyCrud