import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from "expo-router";
import { api } from '../src/lib/api';
import { styled } from 'nativewind';
import { useEffect } from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'

import bgBlur from '../src/assets/bgBlur.png';

import Stripes from '../src/assets/stripes.svg';
const StyledStripes = styled(Stripes);

import NlwLogo from '../src/assets/nlw-spacetime-logo.svg';



const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/7fbd19ddc5ced686a567',
};

export default function App() {
  const router = useRouter();
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '7fbd19ddc5ced686a567',
      scopes: ['identity'],
      /* case your authorization have an error, use the comman:
      console.log('makeRedirectUri', makeRedirectUri({
        scheme: 'nlwspacetime'
      }));
      /* and get the address ex: exp://192.168.0.114:19000 */
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime'
      }),
    },
    discovery
  );

  async function handleGithubOAuthCode(code: string) {
    const response = await  api.post('/register', {
      code,
    });

    const { token } = response.data;

    await SecureStore.setItemAsync('token', token);

    router.push('/memories')
  };

  useEffect(() => {
    /*
      console.log('makeRedirectUri', makeRedirectUri({
        scheme: 'nlwspacetime'
        console.log('response', response);
      })); 
    */

    if (response?.type === 'success') {
      const { code } = response.params;

      handleGithubOAuthCode(code)
    }
  }, [response]);


  if (!hasLoadedFonts) {
    return null;
  };

  return (
    <ImageBackground
      source={bgBlur}
      className="bg-gray-900 flex-1 items-center relative px-8"
      imageStyle={{ position: 'absolute', left: '-110%' }}
    >
      <StyledStripes className="absolute left-2" />
      
      <View className="flex-1 items-center justify-center gap-6">
        <NlwLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">Sua cápsula do tempo</Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
          </Text>
        </View>
        
        <TouchableOpacity 
          activeOpacity={0.7}
          onPress={ () => signInWithGithub() }
          className="
            rounded-full
            bg-green-500
            px-5
            py-3
          "
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">Feito com 💜 no NLW da Rocketseat</Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
