import Router from 'next/router';
import { useCallback, useEffect, useRef } from 'react';

type Cleanup = () => void;