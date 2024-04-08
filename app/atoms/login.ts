import { atom, useAtom } from "jotai"


export const LoginStatusAtom = atom(false)

export const useLoginAtom = () => {
    const [showLogin, setShowLogin] = useAtom(LoginStatusAtom);

    return {
        showLogin,
        setShowLogin
    }
}