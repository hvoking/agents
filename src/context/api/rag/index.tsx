// React imports
import { useContext, createContext } from 'react';

const RagApiContext: React.Context<any> = createContext(null)

export const useRagApi = () => useContext(RagApiContext)

export const RagApiProvider = ({children}: any) => {
	const fetchRag = async (question: any, knowledgeBase: any) => {
		const res = await fetch(`${process.env.REACT_APP_API_URL}/rag`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				question,
				knowledge_base: JSON.stringify(knowledgeBase),
			}),
		});
		const receivedData = await res.json();
		return receivedData;
	}

	return (
		<RagApiContext.Provider value={{ fetchRag }}>
			{children}
		</RagApiContext.Provider>
	)
}

RagApiContext.displayName = "RagApiContext";