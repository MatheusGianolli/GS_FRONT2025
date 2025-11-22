// src/pages/CourseDetails.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from '../routes/useRouter'; // Usando o useRouter para obter parâmetros
import { CourseData, UserCourseProgress, CourseArea } from '../types';
// ... (outros imports/funções)

// ... (fetchCourseDetails - DEVE ser atualizada para usar a apiFetch nativa se for necessária)

const CourseDetails: React.FC = () => {
  // CRITÉRIO: Implementação correta de parâmetros de rota (sem useParams)
  const { params, navigate } = useRouter(); 
  const area = params.area;
  const slug = params.slug;
  
  // ... (o restante da lógica de estado)

  useEffect(() => {
    // A Lógica permanece a mesma, mas agora usa 'area' e 'slug' de 'params'
    if (!area || !slug) {
        navigate('/404'); // Redirecionamento manual
        return;
    }

    // ... (restante da lógica de carregamento/fetch)

  }, [area, slug, navigate]);
  
  // ... (O restante do componente é mantido)
};

export default CourseDetails;